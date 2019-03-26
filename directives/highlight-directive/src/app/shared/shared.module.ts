import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives Import
import { HightlightDirective } from './directives';

const _shared_module_declarations = [
  HightlightDirective
]

const _shared_module_imports = [
  CommonModule
]

const _shared_module_exports = [
  HightlightDirective
]

@NgModule({
  declarations: [
    ..._shared_module_declarations
  ],
  imports: [
    ..._shared_module_imports
  ],
  exports: [
    ..._shared_module_exports
  ]
})
export class SharedModule { }
