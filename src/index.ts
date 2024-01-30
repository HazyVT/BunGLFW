import { dlopen, suffix, FFIType, CString, Pointer } from "bun:ffi";

const path = `./glfw3.dll`;

const lib = dlopen(path, {
  glfwInit: {
    returns: "bool"
  },
  glfwSetErrorCallback: {
    args: [FFIType.function],
    returns: "void"
  },
  glfwCreateWindow: {
    args: ["int", "int", "cstring", "ptr", "ptr"],
    returns: ["ptr"]
  },
  glfwMakeContextCurrent: {
    args: ["ptr"],
    returns: "void"
  },
  glfwShowWindow: {
    args: ["ptr"],
    returns: "void"
  }
})

const init = lib.symbols.glfwInit;
const create = lib.symbols.glfwCreateWindow;
const glfwMakeContextCurrent = (window) => lib.symbols.glfwMakeContextCurrent(window);
const glfwShowWindow = (window) => lib.symbols.glfwShowWindow(window);

if (!init()) {
  console.error("Failed to init");
}
const window = create(640, 480, Buffer.from("Hello World"), null, null);
glfwMakeContextCurrent(window);
glfwShowWindow(window);

