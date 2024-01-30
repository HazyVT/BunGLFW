import { dlopen, suffix, FFIType } from "bun:ffi";

const platform = process.platform;
let path: string = "";

if (platform == "darwin") {
  path = `./libglfw.3.${suffix}`;
} else if (platform == "win32") {
  path = `./glfw3.${suffix}`;
}

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
  },
  glfwWindowShouldClose: {
    args: ["ptr"],
    returns: "int"
  },
  glfwPollEvents: {
    args: [],
    returns: "void"
  },
  glfwSwapBuffers: {
    args: ["ptr"],
    returns: "void"
  },
  glfwSwapInterval: {
    args: ["int"],
    returns: "void"
  }
})

const init = lib.symbols.glfwInit;
const create = lib.symbols.glfwCreateWindow;
const glfwMakeContextCurrent = (window) => lib.symbols.glfwMakeContextCurrent(window);
const glfwShowWindow = (window) => lib.symbols.glfwShowWindow(window);
const glfwWindowShouldClose = (window) => lib.symbols.glfwWindowShouldClose(window);
const glfwSwapBuffers = (window) => lib.symbols.glfwSwapBuffers(window);
const glfwPollEvents = lib.symbols.glfwPollEvents;
const glfwSwapInterval = (interval: number) => lib.symbols.glfwSwapInterval(interval);

if (!init()) {
  console.error("Failed to init");
}
const window = create(640, 480, Buffer.from("Hello World"), null, null);
glfwMakeContextCurrent(window);
glfwSwapInterval(1);
glfwShowWindow(window);

while (!glfwWindowShouldClose(window)) {
  glfwPollEvents();

  glfwSwapBuffers(window);
}

