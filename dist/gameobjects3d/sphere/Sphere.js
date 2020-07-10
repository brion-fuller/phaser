import '../../GameInstance.js';
import '../../utils/base64/Base64ToArrayBuffer.js';
import '../../utils/NOOP.js';
import '../../math/mat4/Matrix4.js';
import '../../math/mat4/FromRotationTranslationScale.js';
import '../../math/vec3/Vec3.js';
import '../../math/quaternion/Quaternion.js';
import '../../math/mat4/Invert.js';
import '../../math/mat4/Multiply.js';
import '../../math/mat4/Transpose.js';
import '../../geom/rectangle/RectangleContains.js';
import '../../geom/rectangle/Rectangle.js';
import '../../math/vec3/Backward.js';
import '../../math/vec3/Down.js';
import '../../math/vec3/Forward.js';
import '../../math/vec3/Left.js';
import '../../math/vec3/Right.js';
import '../../math/vec3/Up.js';
import '../../math/vec3/Zero.js';
import '../../math/vec3/const.js';
import '../../math/vec3/Scale.js';
import '../../math/Clamp.js';
import '../../math/vec3/Normalize.js';
import '../../math/vec3/TransformMat4.js';
import '../../math/vec3/Project.js';
import '../../math/vec3/Vec3Callback.js';
import '../../math/vec3/RGBCallback.js';
import '../../math/vec3/Unproject.js';
import '../../math/quaternion/RotateX.js';
import '../../math/quaternion/RotateY.js';
import '../../math/quaternion/RotateZ.js';
import '../../renderer/BindingQueue.js';
import '../../renderer/webgl1/renderpass/AddViewport.js';
import '../../renderer/webgl1/GL.js';
import '../../renderer/webgl1/renderpass/BindViewport.js';
import '../../renderer/webgl1/renderpass/SetViewport.js';
import '../../renderer/webgl1/renderpass/BindFramebuffer.js';
import '../../renderer/webgl1/renderpass/PopViewport.js';
import '../../renderer/webgl1/renderpass/PopFramebuffer.js';
import '../../renderer/webgl1/renderpass/AddFramebuffer.js';
import '../../renderer/webgl1/renderpass/SetFramebuffer.js';
import '../../renderer/webgl1/renderpass/Draw.js';
import '../../renderer/webgl1/renderpass/Flush.js';
import '../../renderer/webgl1/buffers/DeleteGLBuffer.js';
import '../../renderer/webgl1/buffers/VertexBuffer.js';
import '../../textures/Frame.js';
import '../../textures/Texture.js';
import '../../renderer/webgl1/renderpass/AddVertexBuffer.js';
import '../../renderer/webgl1/renderpass/BindVertexBuffer.js';
import '../../renderer/webgl1/renderpass/PopVertexBuffer.js';
import '../../renderer/webgl1/renderpass/SetVertexBuffer.js';
import '../../renderer/webgl1/renderpass/FlushBuffer.js';
import '../../renderer/webgl1/renderpass/SetTexture.js';
import '../../gameobjects/events/DestroyEvent.js';
import '../../events/Emit.js';
import '../../gameobjects/DIRTY_CONST.js';
import '../../textures/TextureManagerInstance.js';
import '../geometry/CreateVertexSet.js';
import '../geometry/GetBufferFromVertexSet.js';
import { Geometry } from '../geometry/Geometry.js';
import '../components/transform3d/Transform3DComponent.js';
import '../GameObject3D.js';
import '../material/Material.js';
import '../mesh/SetFrame.js';
import '../mesh/SetTexture.js';
import { Mesh } from '../mesh/Mesh.js';
import { SphereGeometry } from '../../geom3d/SphereGeometry.js';

class Sphere extends Mesh {
    constructor(x = 0, y = 0, z = 0, radius = 1, widthSegments = 3, heightSegments = 3, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {
        const data = SphereGeometry(radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength);
        const geometry = new Geometry(data);
        super(x, y, z, geometry);
    }
}

export { Sphere };
