import { ptr, JSCallback, CFunction, FFIType } from 'bun:ffi'
import { lib } from "./glfw"

// GLFW window vairables
export const GLFW_FOCUSED                    =  0x00020001
export const GLFW_ICONIFIED                  =  0x00020002
export const GLFW_RESIZABLE                  =  0x00020003
export const GLFW_VISIBLE                    =  0x00020004
export const GLFW_DECORATED                  =  0x00020005
export const GLFW_AUTO_ICONIFY               =  0x00020006
export const GLFW_FLOATING                   =  0x00020007
export const GLFW_MAXIMIZED                  =  0x00020008
export const GLFW_CENTER_CURSOR              =  0x00020009
export const GLFW_TRANSPARENT_FRAMEBUFFER    =  0x0002000A
export const GLFW_HOVERED                    =  0x0002000B
export const GLFW_FOCUS_ON_SHOW              =  0x0002000C
export const GLFW_RED_BITS                   =  0x00021001
export const GLFW_GREEN_BITS                 =  0x00021002
export const GLFW_BLUE_BITS                  =  0x00021003
export const GLFW_ALPHA_BITS                 =  0x00021004
export const GLFW_DEPTH_BITS                 =  0x00021005
export const GLFW_STENCIL_BITS               =  0x00021006
export const GLFW_ACCUM_RED_BITS             =  0x00021007
export const GLFW_ACCUM_GREEN_BITS           =  0x00021008
export const GLFW_ACCUM_BLUE_BITS            =  0x00021009
export const GLFW_ACCUM_ALPHA_BITS           =  0x0002100A
export const GLFW_AUX_BUFFERS                =  0x0002100B
export const GLFW_STEREO                     =  0x0002100C
export const GLFW_SAMPLES                    =  0x0002100D
export const GLFW_SRGB_CAPABLE               =  0x0002100E
export const GLFW_REFRESH_RATE               =  0x0002100F
export const GLFW_DOUBLEBUFFER               =  0x00021010
export const GLFW_CLIENT_API                 =  0x00022001
export const GLFW_CONTEXT_VERSION_MAJOR      =  0x00022002
export const GLFW_CONTEXT_VERSION_MINOR      =  0x00022003
export const GLFW_CONTEXT_REVISION           =  0x00022004
export const GLFW_CONTEXT_ROBUSTNESS         =  0x00022005
export const GLFW_OPENGL_FORWARD_COMPAT      =  0x00022006
export const GLFW_OPENGL_DEBUG_CONTEXT       =  0x00022007
export const GLFW_OPENGL_PROFILE             =  0x00022008
export const GLFW_CONTEXT_RELEASE_BEHAVIOR   =  0x00022009
export const GLFW_CONTEXT_NO_ERROR           =  0x0002200A
export const GLFW_CONTEXT_CREATION_API       =  0x0002200B
export const GLFW_SCALE_TO_MONITOR           =  0x0002200C
export const GLFW_COCOA_RETINA_FRAMEBUFFER   =  0x00023001
export const GLFW_COCOA_FRAME_NAME           =  0x00023002
export const GLFW_COCOA_GRAPHICS_SWITCHING   =  0x00023003
export const GLFW_X11_CLASS_NAME             =  0x00024001
export const GLFW_X11_INSTANCE_NAME          =  0x00024002

// GLFW global variables
export const GLFW_TRUE = 1;
export const GLFW_FALSE = 0;
export const GLFW_RELEASE = 0;
export const GLFW_PRESS = 1;
export const GLFW_REPEAT = 2;
 
// GLFW joystick hat states
export const GLFW_HAT_CENTERED = 0;
export const GLFW_HAT_UP = 1;
export const GLFW_HAT_RIGHT = 2;
export const GLFW_HAT_DOWN = 4;
export const GLFW_HAT_LEFT = 8;
export const GLFW_HAT_RIGHT_UP = (GLFW_HAT_RIGHT | GLFW_HAT_UP);
export const GLFW_HAT_RIGHT_DOWN = (GLFW_HAT_RIGHT | GLFW_HAT_DOWN);
export const GLFW_HAT_LEFT_UP = (GLFW_HAT_LEFT  | GLFW_HAT_UP);
export const GLFW_HAT_LEFT_DOWN = (GLFW_HAT_LEFT  | GLFW_HAT_DOWN);

/* Printable keys */
export const GLFW_KEY_UNKNOWN = -1;
export const GLFW_KEY_SPACE = 32
export const GLFW_KEY_APOSTROPHE = 39  /* ' */
export const GLFW_KEY_COMMA = 44  /* , */
export const GLFW_KEY_MINUS = 45  /* - */
export const GLFW_KEY_PERIOD = 46  /* . */
export const GLFW_KEY_SLASH = 47  /* / */
export const GLFW_KEY_0 = 48
export const GLFW_KEY_1 = 49
export const GLFW_KEY_2 = 50
export const GLFW_KEY_3 = 51
export const GLFW_KEY_4 = 52
export const GLFW_KEY_5 = 53
export const GLFW_KEY_6 = 54
export const GLFW_KEY_7 = 55
export const GLFW_KEY_8 = 56
export const GLFW_KEY_9 = 57
export const GLFW_KEY_SEMICOLON = 59  /* ; */
export const GLFW_KEY_EQUAL = 61  /* = */
export const GLFW_KEY_A = 65
export const GLFW_KEY_B = 66
export const GLFW_KEY_C = 67
export const GLFW_KEY_D = 68
export const GLFW_KEY_E = 69
export const GLFW_KEY_F = 70
export const GLFW_KEY_G = 71
export const GLFW_KEY_H = 72
export const GLFW_KEY_I = 73
export const GLFW_KEY_J = 74
export const GLFW_KEY_K = 75
export const GLFW_KEY_L = 76
export const GLFW_KEY_M = 77
export const GLFW_KEY_N = 78
export const GLFW_KEY_O = 79
export const GLFW_KEY_P = 80
export const GLFW_KEY_Q = 81
export const GLFW_KEY_R = 82
export const GLFW_KEY_S = 83
export const GLFW_KEY_T = 84
export const GLFW_KEY_U = 85
export const GLFW_KEY_V = 86
export const GLFW_KEY_W = 87
export const GLFW_KEY_X = 88
export const GLFW_KEY_Y = 89
export const GLFW_KEY_Z = 90
export const GLFW_KEY_LEFT_BRACKET = 91  /* [ */
export const GLFW_KEY_BACKSLASH = 92  /* \ */
export const GLFW_KEY_RIGHT_BRACKET = 93  /* ] */
export const GLFW_KEY_GRAVE_ACCENT = 96  /* ` */
export const GLFW_KEY_WORLD_1 = 161 /* non-US #1 */
export const GLFW_KEY_WORLD_2 = 162 /* non-US #2 */

/* Function keys */
export const GLFW_KEY_ESCAPE = 256
export const GLFW_KEY_ENTER = 257
export const GLFW_KEY_TAB = 258
export const GLFW_KEY_BACKSPACE = 259
export const GLFW_KEY_INSERT = 260
export const GLFW_KEY_DELETE = 261
export const GLFW_KEY_RIGHT = 262
export const GLFW_KEY_LEFT = 263
export const GLFW_KEY_DOWN = 264
export const GLFW_KEY_UP = 265
export const GLFW_KEY_PAGE_UP = 266
export const GLFW_KEY_PAGE_DOWN = 267
export const GLFW_KEY_HOME = 268
export const GLFW_KEY_END = 269
export const GLFW_KEY_CAPS_LOCK = 280
export const GLFW_KEY_SCROLL_LOCK = 281
export const GLFW_KEY_NUM_LOCK = 282
export const GLFW_KEY_PRINT_SCREEN = 283
export const GLFW_KEY_PAUSE = 284
export const GLFW_KEY_F1 = 290
export const GLFW_KEY_F2 = 291
export const GLFW_KEY_F3 = 292
export const GLFW_KEY_F4 = 293
export const GLFW_KEY_F5 = 294
export const GLFW_KEY_F6 = 295
export const GLFW_KEY_F7 = 296
export const GLFW_KEY_F8 = 297
export const GLFW_KEY_F9 = 298
export const GLFW_KEY_F10 = 299
export const GLFW_KEY_F11 = 300
export const GLFW_KEY_F12 = 301
export const GLFW_KEY_F13 = 302
export const GLFW_KEY_F14 = 303
export const GLFW_KEY_F15 = 304
export const GLFW_KEY_F16 = 305
export const GLFW_KEY_F17 = 306
export const GLFW_KEY_F18 = 307
export const GLFW_KEY_F19 = 308
export const GLFW_KEY_F20 = 309
export const GLFW_KEY_F21 = 310
export const GLFW_KEY_F22 = 311
export const GLFW_KEY_F23 = 312
export const GLFW_KEY_F24 = 313
export const GLFW_KEY_F25 = 314
export const GLFW_KEY_KP_0 = 320
export const GLFW_KEY_KP_1 = 321
export const GLFW_KEY_KP_2 = 322
export const GLFW_KEY_KP_3 = 323
export const GLFW_KEY_KP_4 = 324
export const GLFW_KEY_KP_5 = 325
export const GLFW_KEY_KP_6 = 326
export const GLFW_KEY_KP_7 = 327
export const GLFW_KEY_KP_8 = 328
export const GLFW_KEY_KP_9 = 329
export const GLFW_KEY_KP_DECIMAL = 330
export const GLFW_KEY_KP_DIVIDE = 331
export const GLFW_KEY_KP_MULTIPLY = 332
export const GLFW_KEY_KP_SUBTRACT = 333
export const GLFW_KEY_KP_ADD = 334
export const GLFW_KEY_KP_ENTER = 335
export const GLFW_KEY_KP_EQUAL = 336
export const GLFW_KEY_LEFT_SHIFT = 340
export const GLFW_KEY_LEFT_CONTROL = 341
export const GLFW_KEY_LEFT_ALT = 342
export const GLFW_KEY_LEFT_SUPER = 343
export const GLFW_KEY_RIGHT_SHIFT = 344
export const GLFW_KEY_RIGHT_CONTROL = 345
export const GLFW_KEY_RIGHT_ALT = 346
export const GLFW_KEY_RIGHT_SUPER = 347

export const GLFW_KEY_MENU = 348; 

/* Mod keys */
export const GLFW_MOD_SHIFT      =     0x0001
export const GLFW_MOD_CONTROL    =     0x0002
export const GLFW_MOD_ALT        =     0x0004
export const GLFW_MOD_SUPER      =     0x0008
export const GLFW_MOD_CAPS_LOCK  =     0x0010
export const GLFW_MOD_NUM_LOCK   =     0x0020

/* Mouse Buttons */
export const GLFW_MOUSE_BUTTON_1       =  0
export const GLFW_MOUSE_BUTTON_2       =  1
export const GLFW_MOUSE_BUTTON_3       =  2
export const GLFW_MOUSE_BUTTON_4       =  3
export const GLFW_MOUSE_BUTTON_5       =  4
export const GLFW_MOUSE_BUTTON_6       =  5
export const GLFW_MOUSE_BUTTON_7       =  6
export const GLFW_MOUSE_BUTTON_8       =  7
export const GLFW_MOUSE_BUTTON_LAST    =  GLFW_MOUSE_BUTTON_8
export const GLFW_MOUSE_BUTTON_LEFT    =  GLFW_MOUSE_BUTTON_1
export const GLFW_MOUSE_BUTTON_RIGHT   =  GLFW_MOUSE_BUTTON_2
export const GLFW_MOUSE_BUTTON_MIDDLE  =  GLFW_MOUSE_BUTTON_3

/* Joysticks */
export const GLFW_JOYSTICK_1        =     0
export const GLFW_JOYSTICK_2        =     1
export const GLFW_JOYSTICK_3        =     2
export const GLFW_JOYSTICK_4        =     3
export const GLFW_JOYSTICK_5        =     4
export const GLFW_JOYSTICK_6        =     5
export const GLFW_JOYSTICK_7        =     6
export const GLFW_JOYSTICK_8        =     7
export const GLFW_JOYSTICK_9        =     8
export const GLFW_JOYSTICK_10       =     9
export const GLFW_JOYSTICK_11       =     10
export const GLFW_JOYSTICK_12       =     11
export const GLFW_JOYSTICK_13       =     12
export const GLFW_JOYSTICK_14       =     13
export const GLFW_JOYSTICK_15       =     14
export const GLFW_JOYSTICK_16       =     15
export const GLFW_JOYSTICK_LAST     =     GLFW_JOYSTICK_16

/* Gamepad */
export const GLFW_GAMEPAD_BUTTON_A             =  0
export const GLFW_GAMEPAD_BUTTON_B             =  1
export const GLFW_GAMEPAD_BUTTON_X             =  2
export const GLFW_GAMEPAD_BUTTON_Y             =  3
export const GLFW_GAMEPAD_BUTTON_LEFT_BUMPER   =  4
export const GLFW_GAMEPAD_BUTTON_RIGHT_BUMPER  =  5
export const GLFW_GAMEPAD_BUTTON_BACK          =  6
export const GLFW_GAMEPAD_BUTTON_START         =  7
export const GLFW_GAMEPAD_BUTTON_GUIDE         =  8
export const GLFW_GAMEPAD_BUTTON_LEFT_THUMB    =  9
export const GLFW_GAMEPAD_BUTTON_RIGHT_THUMB   =  10
export const GLFW_GAMEPAD_BUTTON_DPAD_UP       =  11
export const GLFW_GAMEPAD_BUTTON_DPAD_RIGHT    =  12
export const GLFW_GAMEPAD_BUTTON_DPAD_DOWN     =  13
export const GLFW_GAMEPAD_BUTTON_DPAD_LEFT     =  14
export const GLFW_GAMEPAD_BUTTON_LAST          =  GLFW_GAMEPAD_BUTTON_DPAD_LEFT

export const GLFW_GAMEPAD_BUTTON_CROSS    =   GLFW_GAMEPAD_BUTTON_A
export const GLFW_GAMEPAD_BUTTON_CIRCLE   =   GLFW_GAMEPAD_BUTTON_B
export const GLFW_GAMEPAD_BUTTON_SQUARE   =   GLFW_GAMEPAD_BUTTON_X
export const GLFW_GAMEPAD_BUTTON_TRIANGLE =   GLFW_GAMEPAD_BUTTON_Y

/* Gamepad Axis */
export const GLFW_GAMEPAD_AXIS_LEFT_X        = 0
export const GLFW_GAMEPAD_AXIS_LEFT_Y        = 1
export const GLFW_GAMEPAD_AXIS_RIGHT_X       = 2
export const GLFW_GAMEPAD_AXIS_RIGHT_Y       = 3
export const GLFW_GAMEPAD_AXIS_LEFT_TRIGGER  = 4
export const GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER = 5
export const GLFW_GAMEPAD_AXIS_LAST          = GLFW_GAMEPAD_AXIS_RIGHT_TRIGGER

/* Error codes */
export const GLFW_NO_ERROR              = 0
export const GLFW_NOT_INITIALIZED       = 0x00010001
export const GLFW_NO_CURRENT_CONTEXT    = 0x00010002
export const GLFW_INVALID_ENUM          = 0x00010003
export const GLFW_INVALID_VALUE         = 0x00010004
export const GLFW_OUT_OF_MEMORY         = 0x00010005
export const GLFW_API_UNAVAILABLE       = 0x00010006
export const GLFW_VERSION_UNAVAILABLE   = 0x00010007
export const GLFW_PLATFORM_ERROR        = 0x00010008
export const GLFW_FORMAT_UNAVAILABLE    = 0x00010009
export const GLFW_NO_WINDOW_CONTEXT     = 0x0001000A
export const GLFW_CURSOR_UNAVAILABLE    = 0x0001000B
export const GLFW_FEATURE_UNAVAILABLE   = 0x0001000C
export const GLFW_FEATURE_UNIMPLEMENTED = 0x0001000D
export const GLFW_PLATFORM_UNAVAILABLE  = 0x0001000E

/* Types */
export type glfwMonitor = number | null;
export type glfwWindow = number | null;
export type glfwAllocator = number | null;
export type glfwCursor = number | null;

/* Function Types */
export type GLFWwindowposfun = (window: glfwWindow, xpos: number, ypos: number) => void;
export type GLFWwindowsizefun = (window: glfwWindow, width: number, height: number) => void;
export type GLFWwindowclosefun = (window: glfwWindow) => void;
export type GLFWwindowrefreshfun = (window: glfwWindow) => void;
export type GLFWwindowfocusfun = (window: glfwWindow, focused: number) => void;
export type GLFWwindowiconifyfun = (window: glfwWindow, iconified: number) => void;
export type GLFWwindowmaximizefun = (window: glfwWindow, maximized: number) => void;
export type GLFWframebuffersizefun = (window: glfwWindow, width: number, height: number) => void;
export type GLFWwindowcontentscalefun = (window: glfwWindow, x_scale: number, y_scale: number) => void; 
export type GLFWcursorenterfun = (window: glfwWindow, entered: number) => void;
export type GLFWscrollfun = (window: glfwWindow, x_offset: number, y_offset: number) => void;
export type GLFWkeyfun = (window: glfwWindow, key: number, scancode: number, action: number, mods: number) => void;
export type GLFWcharfun = (window: glfwWindow, codepoint: number) => void;
export type GLFWcharmodsfun = (window: glfwWindow, codepoint: number, mods: number) => void;
export type GLFWmonitorfun = (window: glfwWindow, event: number) => void;
export type GLFWjoystickfun = (joystick_id: number, event: number) => void;
export type GLFWmousebuttonfun = (window: glfwWindow, button: number, action: number, mods: number) => void;
export type GLFWcursorposfun = (window: glfwWindow, xpos: number, ypos: number) => void;


// Void argument functions
export const glfwInit = lib.symbols.glfwInit;
export const glfwPollEvents = lib.symbols.glfwPollEvents;
export const glfwTerminate = lib.symbols.glfwTerminate;
export const glfwDefaultWindowHints = lib.symbols.glfwDefaultWindowHints;
export const glfwWaitEvents = lib.symbols.glfwWaitEvents;
export const glfwPostEmptyEvent = lib.symbols.glfwPostEmptyEvent;
export const glfwRawMouseMotionSupported = lib.symbols.glfwRawMouseMotionSupported;
export const glfwGetTime =  lib.symbols.glfwGetTime;
export const glfwGetTimerValue = () => lib.symbols.glfwGetTimerValue().toString();
export const glfwGetTimerFrequency = () => lib.symbols.glfwGetTimerFrequency().toString();

// Window
export const glfwCreateWindow = (width: number, height: number, title: string, monitor: glfwMonitor, share: glfwWindow) : glfwWindow => lib.symbols.glfwCreateWindow(width, height, Buffer.from(title), monitor, share);
export const glfwMakeContextCurrent = (window: glfwWindow) : void => lib.symbols.glfwMakeContextCurrent(window);
export const glfwSwapInterval = (interval: number) : void => lib.symbols.glfwSwapInterval(interval);
export const glfwShowWindow = (window: glfwWindow) : void => lib.symbols.glfwShowWindow(window);
export const glfwWindowShouldClose = (window: glfwWindow) : boolean => lib.symbols.glfwWindowShouldClose(window);
export const glfwSwapBuffers = (window: glfwWindow) : void => lib.symbols.glfwSwapBuffers(window);
export const glfwGetWindowAttrib = (window: glfwWindow, attribute: number) : boolean => lib.symbols.glfwGetWindowAttrib(window, attribute);
export const glfwDestroyWindow = (window: glfwWindow) : void => lib.symbols.glfwDestroyWindow(window);
export const glfwWindowHint = (hint: number, state: number) : void => lib.symbols.glfwWindowHint(hint, state);
export const glfwInitHint = (hint: number, state: number) : void => lib.symbols.glfwInitHint(hint, state);
export const glfwGetError = (description: string) : number => lib.symbols.glfwGetError(Buffer.from(description));
export const glfwWindowHintString = (hint: number, value: string) : void => lib.symbols.glfwWindowHintString(hint, Buffer.from(value));
export const glfwSetWindowShouldClose = (window: glfwWindow, value: number) : void => lib.symbols.glfwSetWindowShouldClose(window, value);
export const glfwSetWindowTitle = (window: glfwWindow, title: string) : void => lib.symbols.glfwSetWindowTitle(window, Buffer.from(title));
export const glfwSetWindowPos = (window: glfwWindow, x: number, y: number) : void => lib.symbols.glfwSetWindowPos(window, x, y);
export const glfwSetWindowSize = (window: glfwWindow, width: number, height: number) : void => lib.symbols.glfwSetWindowSize(window, width, height);
export const glfwSetWindowSizeLimits = (window: glfwWindow, minWidth: number, minHeight: number, maxWidth: number, maxHeight: number) : void => lib.symbols.glfwSetWindowSizeLimits(window, minWidth, minHeight, maxWidth, maxHeight);
export const glfwSetWindowAspectRatio = (window: glfwWindow, numer: number, denom: number) : void => lib.symbols.glfwSetWindowAspectRatio(window, numer, denom);
export const glfwGetWindowOpacity = (window: glfwWindow) : number => lib.symbols.glfwGetWindowOpacity(window);
export const glfwSetWindowMonitor = (window: glfwWindow, monitor: glfwMonitor, x: number, y: number, width: number, height: number, refresh_rate: number) : void => lib.symbols.glfwSetWindowMonitor(window, monitor, x, y, width, height, refresh_rate);
export const glfwIconifyWindow = (window: glfwWindow) : void => lib.symbols.glfwIconifyWindow(window);
export const glfwRestoreWindow = (window: glfwWindow) : void => lib.symbols.glfwRestoreWindow(window);
export const glfwMaximizeWindow = (window: glfwWindow) : void => lib.symbols.glfwMaximizeWindow(window);
export const glfwHideWindow = (window: glfwWindow) : void => lib.symbols.glfwHideWindow(window);
export const glfwFocusWindow = (window: glfwWindow) : void => lib.symbols.glfwFocusWindow(window);
export const glfwRequestWindowAttention = (window: glfwWindow) : void => lib.symbols.glfwRequestWindowAttention(window);
export const glfwGetWindowMonitor = (window: glfwWindow) : glfwMonitor => lib.symbols.glfwGetWindowMonitor(window);
export const glfwSetWindowAttrib = (window: glfwWindow, attribute: number, value: number) : void => lib.symbols.glfwSetWindowAttrib(window, attribute, value);
export const glfwWaitEventsTimeout = (timeout: number) : void => lib.symbols.glfwWaitEventsTimeout(timeout);
export const glfwGetInputMode = (window: glfwWindow, mode: number) : number => lib.symbols.glfwGetInputMode(window, mode);
export const glfwSetInputMode = (window: glfwWindow, mode: number, value: number) : void => lib.symbols.glfwSetInputMode(window, mode, value);
export const glfwGetKeyName = (key: number, scancode: number) : string => lib.symbols.glfwGetKeyName(key, scancode).toString();
export const glfwGetKeyScancode = (key: number) : number => lib.symbols.glfwGetKeyScancode(key);
export const glfwGetKey = (window: glfwWindow, key: number) : number => lib.symbols.glfwGetKey(window, key);
export const glfwGetMouseButton = (window: glfwWindow, button: number) : number => lib.symbols.glfwGetMouseButton(window, button);
export const glfwSetCursorPos = (window: glfwWindow, x_pos: number, y_pos: number) : void => lib.symbols.glfwSetCursorPos(window, x_pos, y_pos);
export const glfwJoystickPresent = (joystick_id: number) : number => lib.symbols.glfwJoystickPresent(joystick_id);
export const glfwGetJoystickName = (joystick_id: number) : string => lib.symbols.glfwGetJoystickName(joystick_id).toString();
export const glfwJoystickIsGamepad = (joystick_id: number) : boolean => lib.symbols.glfwJoystickIsGamepad(joystick_id);
export const glfwSetTime = (time: number) : void => lib.symbols.glfwSetTime(time);
export const glfwGetCursorPos = (window: glfwWindow, xpos: number, ypos: number) : number => lib.symbols.glfwGetCursorPos(window, xpos , ypos);



// Setters
export const glfwSetWindowPosCallback = (window: glfwWindow, callback: GLFWwindowposfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowPosCallback(window, clb);
}

export const glfwSetWindowSizeCallback = (window: glfwWindow, callback: GLFWwindowsizefun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowSizeCallback(window, clb);
}

export const glfwSetWindowCloseCallback = (window: glfwWindow, callback: GLFWwindowclosefun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowCloseCallback(window, clb);
}

export const glfwSetWindowRefreshCallback = (window: glfwWindow, callback: GLFWwindowrefreshfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowRefreshCallback(window, clb);
}

export const glfwSetWindowFocusCallback = (window: glfwWindow, callback: GLFWwindowfocusfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowFocusCallback(window, clb);
}

export const glfwSetWindowIconifyCallback = (window: glfwWindow, callback: GLFWwindowiconifyfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowIconifyCallback(window, clb);
}

export const glfwSetWindowMaximizeCallback = (window: glfwWindow, callback: GLFWwindowmaximizefun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetWindowMaximizeCallback(window, clb);
}

export const glfwSetFramebufferSizeCallback = (window: glfwWindow, callback: GLFWframebuffersizefun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetFramebufferSizeCallback(window, clb);
}

export const glfwSetKeyCallback = (window: glfwWindow, callback: GLFWkeyfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetKeyCallback(window, clb);
}

export const glfwSetCharCallback = (window: glfwWindow, callback: GLFWcharfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetCharCallback(window, clb);
}

export const glfwSetCharModsCallback = (window: glfwWindow, callback: GLFWcharmodsfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetCharModsCallback(window, clb);
}

export const glfwSetMouseButtonCallback = (window: glfwWindow, callback: GLFWmousebuttonfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetMouseButtonCallback(window, clb);
}

export const glfwSetScrollCallback = (window: glfwWindow, callback: GLFWscrollfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetScrollCallback(window, clb);
}

export const glfwSetJoystickCallback = (window: glfwWindow, callback: GLFWjoystickfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetScrollCallback(window, clb);
}

export const glfwSetCursorPosCallback = (window: glfwWindow, callback: GLFWcursorposfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetScrollCallback(window, clb);
}

export const glfwSetCursorEnterCallback = (window: glfwWindow, callback: GLFWcursorenterfun) : void => {
  const clb = new JSCallback(callback, {
    args: ["ptr", "int"],
    returns: "void"
  })
  lib.symbols.glfwSetScrollCallback(window, clb);
}



