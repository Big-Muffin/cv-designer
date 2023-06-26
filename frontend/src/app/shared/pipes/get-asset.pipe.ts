import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'getImageAsset' })
export class GetImageAssetPipe implements PipeTransform {
  transform(relativePath: string) {
    return `assets/images/${relativePath}`;
  }
}
