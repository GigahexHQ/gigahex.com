#!/bin/sh

# Compile "tutorial" plugin
tsc \
    --esModuleInterop \
    --outDir \
    plugins/tutorial/compiled \
    plugins/tutorial/index.ts plugins/tutorial/markdownLoader.ts

# Compile "changelog" plugin    
tsc \
    --esModuleInterop \
    --outDir \
    plugins/changelog/compiled \
    plugins/changelog/index.ts plugins/changelog/markdownLoader.ts
