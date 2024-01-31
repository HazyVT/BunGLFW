# BunGLFW

Typescript bindings for bun. No installation needed.

To install please use 
```node
bun install bunglfw
```

Here is an example of some code

```ts
import { 
  GLFW_FALSE, 
  GLFW_MAXIMIZED, 
  GLFW_RESIZABLE, 
  GLFW_TRUE, 
  GLFW_VISIBLE, 
  glfwCreateWindow, 
  glfwDefaultWindowHints, 
  glfwGetCursorPos, 
  glfwInit, 
  glfwMakeContextCurrent, 
  glfwPollEvents, 
  glfwSetErrorCallback, 
  glfwShowWindow, 
  glfwSwapBuffers, 
  glfwSwapInterval, 
  glfwWindowHint, 
  glfwWindowShouldClose, 
  type GLFWerrorfun 
} from "bunglfw";

if (!glfwInit()) {
  console.error("Failed to init");
}

const error_call = (error_code: number, description: Buffer) => {
  console.error(error_code + ' ' + description.toString());
}

glfwSetErrorCallback(error_call);

const window = glfwCreateWindow(640, 480, "Hello World", null, null);

glfwDefaultWindowHints();
glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);
glfwWindowHint(GLFW_RESIZABLE, GLFW_TRUE);
glfwWindowHint(GLFW_MAXIMIZED, GLFW_TRUE);

glfwMakeContextCurrent(window);
glfwSwapInterval(1);
glfwShowWindow(window);

while (!glfwWindowShouldClose(window)) {
  glfwPollEvents();

  glfwSwapBuffers(window);
}
```