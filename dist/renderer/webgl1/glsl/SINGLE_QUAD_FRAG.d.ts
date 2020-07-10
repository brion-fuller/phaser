export declare const SINGLE_QUAD_FRAG = "#define SHADER_NAME SINGLE_QUAD_FRAG\n\nprecision highp float;\n\nvarying vec2 vTextureCoord;\nvarying float vTextureId;\nvarying vec4 vTintColor;\n\nuniform sampler2D uTexture;\n\nvoid main (void)\n{\n    vec4 color = texture2D(uTexture, vTextureCoord);\n\n    gl_FragColor = color * vec4(vTintColor.bgr * vTintColor.a, vTintColor.a);\n}";
//# sourceMappingURL=SINGLE_QUAD_FRAG.d.ts.map