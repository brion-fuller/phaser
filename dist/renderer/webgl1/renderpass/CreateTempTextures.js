import '../../../config/const.js';
import '../../../config/ConfigStore.js';
import { SetMaxTextures } from '../../../config/maxtextures/SetMaxTextures.js';
import { gl } from '../GL.js';
import { GetMaxTextures } from '../../../config/maxtextures/GetMaxTextures.js';
import { CheckShaderMaxIfStatements } from '../shaders/CheckShaderMaxIfStatements.js';

function CreateTempTextures(renderPass) {
    let maxGPUTextures = CheckShaderMaxIfStatements(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
    const maxConfigTextures = GetMaxTextures();
    if (maxConfigTextures === 0 || (maxConfigTextures > 0 && maxConfigTextures > maxGPUTextures)) {
        SetMaxTextures(maxGPUTextures);
    }
    else if (maxConfigTextures > 0 && maxConfigTextures < maxGPUTextures) {
        maxGPUTextures = Math.max(8, maxConfigTextures);
    }
    const tempTextures = renderPass.tempTextures;
    if (tempTextures.length) {
        tempTextures.forEach(texture => {
            gl.deleteTexture(texture);
        });
    }
    const index = [];
    for (let texturesIndex = 0; texturesIndex < maxGPUTextures; texturesIndex++) {
        const tempTexture = gl.createTexture();
        gl.activeTexture(gl.TEXTURE0 + texturesIndex);
        gl.bindTexture(gl.TEXTURE_2D, tempTexture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
        tempTextures[texturesIndex] = tempTexture;
        index.push(texturesIndex);
    }
    renderPass.maxTextures = maxGPUTextures;
    renderPass.textureIndex = index;
    renderPass.currentActiveTexture = 1;
}

export { CreateTempTextures };
