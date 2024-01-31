import { dlopen, suffix, FFIType } from "bun:ffi";

const platform = process.platform;
let path: string = "";

if (platform == "darwin") {
  path = import.meta.dir + `/lib/libglfw.3.${suffix}`;
} else if (platform == "win32") {
  path = import.meta.dir + `src/lib/glfw3.${suffix}`;
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
    returns: "bool"
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
    returns: "bool"
  },
  glfwDestroyWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwTerminate: {
    returns: "void"
  },
  glfwDefaultWindowHints: {
    args: [],
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
  glfwWindowHintString: {
    args: ["int", "cstring"],
    returns: "void"
  },
  glfwSetWindowShouldClose: {
    args: ["ptr", "int"],
    returns: "void"
  },
  glfwSetWindowTitle: {
    args: ["ptr", "cstring"],
    returns: "void"
  },
  glfwSetWindowPos: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwSetWindowSize: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwSetWindowSizeLimits: {
    args: ["ptr", "int", "int", "int", "int"],
    returns: "void"
  },
  glfwSetWindowAspectRatio: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwGetWindowOpacity: {
    args: ["ptr"],
    returns: "float"
  },
  glfwSetWindowOpacity: {
    args: ["ptr"],
    returns: "void"
  },
  glfwIconifyWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwRestoreWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwMaximizeWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwHideWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwFocusWindow: {
    args: ["ptr"],
    returns: "void"
  },
  glfwRequestWindowAttention: {
    args: ["ptr"],
    returns: "void"
  },
  glfwGetWindowMonitor: {
    args: ["ptr"],
    returns: "ptr"
  },
  glfwSetWindowMonitor: {
    args: ["ptr", "ptr", "int", "int", "int", "int", "int"],
    returns: "void"
  },
  glfwSetWindowAttrib: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwWaitEvents: {
    args: [],
    returns: "void"
  },
  glfwWaitEventsTimeout: {
    args: ["double"],
    returns: "void"
  },
  glfwPostEmptyEvent: {
    args: [],
    returns: "void"
  },
  glfwSetWindowPosCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowSizeCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowCloseCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowRefreshCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowFocusCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowIconifyCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowMaximizeCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetFramebufferSizeCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetWindowContentScaleCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwSetKeyCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetCharCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetCharModsCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetMouseButtonCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetScrollCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetJoystickCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetCursorPosCallback: {
    args: ['ptr', FFIType.function],
    returns: "ptr"
  },
  glfwSetCursorEnterCallback: {
    args: ["ptr", FFIType.function],
    returns: "ptr"
  },
  glfwGetInputMode: {
    args: ["ptr", "int"],
    returns: "int"
  },
  glfwSetInputMode: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwRawMouseMotionSupported: {
    returns: "int"
  },
  glfwGetKeyName: {
    args: ["int", "int"],
    returns: "cstring"
  },
  glfwGetKeyScancode: {
    args: ["int"],
    returns: "int"
  },
  glfwGetKey: {
    args: ["ptr", "int"],
    returns: "int"
  },
  glfwGetMouseButton: {
    args: ["ptr", "int"],
    returns: 'int'
  },
  glfwSetCursorPos: {
    args: ["ptr", "int", "int"],
    returns: "void"
  },
  glfwJoystickPresent: {
    args: ["int"],
    returns: "int"
  },
  glfwGetJoystickName: {
    args: ["int"],
    returns: "cstring"
  },
  glfwJoystickIsGamepad: {
    args: ["int"],
    returns: "bool"
  },
  glfwGetTime: {
    args: [],
    returns: "double"
  },
  glfwSetTime: {
    args: ["double"],
    returns: "void"
  },
  glfwGetTimerValue: {
    args: [],
    returns: "uint64_t"
  },
  glfwGetTimerFrequency: {
    args: [],
    returns: "uint64_t"
  },
  glfwGetCursorPos: {
    args: ["ptr", "ptr", "ptr"],
    returns: "int"
  },




})