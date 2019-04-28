import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Directives Import
import { RemoveWhitespacesDirective } from './directives';

const _shared_module_declarations = [
  RemoveWhitespacesDirective
]

const _shared_module_imports = [
  CommonModule
]

const _shared_module_exports = [
  RemoveWhitespacesDirective
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