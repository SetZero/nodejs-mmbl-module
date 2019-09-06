cmake_minimum_required(VERSION 3.5)

project (nodejs_mmbl)
include_directories(${CMAKE_JS_INC})
include_directories(${CMAKE_JS_INC} ./node_modules/node-addon-api)
file(GLOB SOURCE_FILES "src/cppsrc/*.cpp" "src/cppsrc/*.h")
add_library(${PROJECT_NAME} SHARED ${SOURCE_FILES} ${CMAKE_JS_SRC})
set_target_properties(${PROJECT_NAME} PROPERTIES PREFIX "" SUFFIX ".node")
target_link_libraries(${PROJECT_NAME} ${CMAKE_JS_LIB})