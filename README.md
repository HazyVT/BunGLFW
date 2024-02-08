# BunGLFW

Typescript bindings for bun. No installation needed.

To install please use 
```node
bun install bunglfw
```

Here is an example of some code

```ts
import { 
  glfwSetKeyCallback, 
  GLFW_FALSE, 
  GLFW_MAXIMIZED, 
  GLFW_RESIZABLE, 
  GLFW_TRUE, 
  GLFW_VISIBLE, 
  glfwCreateWindow, 
  glfwInit, 
  glfwMakeContextCurrent, 
  glfwPollEvents, 
  glfwSetErrorCallback, 
  glfwShowWindow, 
  glfwSwapBuffers, 
  glfwSwapInterval, 
  glfwWindowHint, 
  glfwWindowShouldClose,  
  GLFW_PRESS, 
  GLFW_KEY_ESCAPE, 
  glfwSetWindowShouldClose, 
  glfw_error_codes, 
  glfwDefaultWindowHints, 
  type GLFWkeyfun, type glfwWindow, 
} from "bunglfw";

if (!glfwInit()) {
  throw new Error("GLFW Failed to initialize");
}

const error_call = (error_code: number, description: string) => {
  [...glfw_error_codes.keys()].forEach((key) => {
    if (glfw_error_codes.get(key) == error_code) {
      console.error(key);
    }
  })
}

let controls: GLFWkeyfun = (window: glfwWindow, key: number, scancode: number, action: number, mods: number) => {
  if (action == GLFW_PRESS) {
    if (key == GLFW_KEY_ESCAPE) {
      glfwSetWindowShouldClose(window, GLFW_TRUE);
    }
  }
}

glfwDefaultWindowHints();
glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);
glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
glfwWindowHint(GLFW_MAXIMIZED, GLFW_TRUE);

const window = glfwCreateWindow(640, 480, "Hello World", null, null);


glfwSetKeyCallback(window, controls)
glfwSetErrorCallback(error_call);

glfwMakeContextCurrent(window);

glfwSwapInterval(1);
glfwShowWindow(window);

while (!glfwWindowShouldClose(window)) {
  glfwPollEvents();

  glfwSwapBuffers(window);
}
```