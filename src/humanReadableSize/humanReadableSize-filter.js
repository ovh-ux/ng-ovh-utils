import filesize from 'filesize';

export default /* @ngInject */ function ($translate) {
  return function (size, options) {
    if (Number.isNaN(size)) {
      return '';
    }

    const opts = options || {};
    opts.suffixes = {
      B: $translate.instant('unit_size_B'),
      KB: $translate.instant('unit_size_KB'),
      MB: $translate.instant('unit_size_MB'),
      GB: $translate.instant('unit_size_GB'),
      TB: $translate.instant('unit_size_TB'),
      PB: $translate.instant('unit_size_PB'),
      EB: $translate.instant('unit_size_EB'),
      ZB: $translate.instant('unit_size_ZB'),
      YB: $translate.instant('unit_size_YB'),
    };

    return filesize(size, opts);
  };
}
