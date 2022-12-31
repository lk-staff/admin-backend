import { Module } from '@nestjs/common';
import { Routes, RouterModule } from '@nestjs/core';
import { HelloModule } from './hello/hello.module';

const routes: Routes = [
  {
    path: '/v1',
    children: [{ path: '/hello', module: HelloModule }],
  },
];

@Module({
  imports: [RouterModule.register(routes), HelloModule],
})
export class V1Module {}
