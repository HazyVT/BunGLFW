import { dlopen, suffix, FFIType, ptr, CString, type Pointer, toArrayBuffer, JSCallback } from "bun:ffi";

const platform = process.platform;
let path: string = "";

if (platform == "darwin") {
  path = `./src/lib/libglfw.3.${suffix}`;
} else if (platform == "win32") {
  path = `./src/lib/glfw3.${suffix}`;
}

export const lib = dlopen(path, {
  glfwInit: {
    returns: "bool"
  },
  glfwSetErrorCallback: {
    args: [FFIType.function],
    returns: "ptr"
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
  },
  glfwWindowShouldClose: {
    args: ["ptr"],
    returns: "int"
  },
  glfwPollEvents: {
    returns: "void"
  },
  glfwSwapBuffers: {
    args: ["ptr"],
    returns: "void"
  },
  glfwSwapInterval: {
    args: ["int"],
    returns: "void"
  },
  glfwGetProcAddress: {
    args: ["cstring"],
    returns: "ptr"
  },
  glfwGetWindowAttrib: {
    args: ["ptr", "int"],
    returns: "int"
  },
  glfwDestroyWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwTerminate: {
    returns: "void"
  },
  glfwDefaultWindowHints: {
    returns: "void"
  },
  glfwWindowHint: {
    args: ["ptr", "int"],
    returns: "void"
  },
  glfwInitHint: {
    args: ["int", "int"],
    returns: "void"
  },
  glfwGetError: {
    args: ["cstring"],
    returns: "int"
  },
  

})