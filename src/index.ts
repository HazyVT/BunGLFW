import { ptr, JSCallback, CFunction, type CString } from 'bun:ffi'
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

// Types
export type glfwMonitor = number | null;
export type glfwWindow = number | null;

// Void argument functions
export const glfwInit = lib.symbols.glfwInit;
export const glfwPollEvents = lib.symbols.glfwPollEvents;


// Window
export const glfwCreateWindow = (width: number, height: number, title: string, monitor: glfwMonitor, share: glfwWindow) => lib.symbols.glfwCreateWindow(width, height, Buffer.from(title), monitor, share);
export const glfwMakeContextCurrent = (window: glfwWindow) => lib.symbols.glfwMakeContextCurrent(window);
export const glfwSwapInterval = (interval: number) => lib.symbols.glfwSwapInterval(interval);
export const glfwShowWindow = (window: glfwWindow) => lib.symbols.glfwShowWindow(window);
export const glfwWindowShouldClose = (window: glfwWindow) => lib.symbols.glfwWindowShouldClose(window);
export const glfwSwapBuffers = (window: glfwWindow) => lib.symbols.glfwSwapBuffers(window);
export const glfwGetWindowAttrib = (window: glfwWindow, attribute: number) => lib.symbols.glfwGetWindowAttrib(window, attribute);






