declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    dpr: number;
    constructor(options?: Record<string, unknown>);
    setSize(width: number, height: number): void;
    render(options: { scene: Transform; camera: Camera }): void;
  }

  export class Camera {
    constructor(gl: WebGLRenderingContext);
  }

  export class Transform {
    constructor();
  }

  export class Program {
    uniforms: Record<string, { value: unknown }>;
    constructor(gl: WebGLRenderingContext, options: Record<string, unknown>);
  }

  export class Mesh {
    constructor(gl: WebGLRenderingContext, options: Record<string, unknown>);
    setParent(parent: Transform): this;
  }

  export class Geometry {
    constructor(gl: WebGLRenderingContext, attributes: Record<string, unknown>);
  }
}
