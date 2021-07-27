import { TYPE_MAPPING } from '../config/content.js';

class Err_Type {
  key = '${key}';

  constructor(options = {}) {
    const { key = this.key, type = this.type } = options;
    this.key = key;
    this.type = type;
  }

  getErrMessage(type) {
    const msgMapping = {
      MISSING: `option 缺少参数 ${this.key}`,
      ILLEGAL: `option ${this.key} 数据设置类型类型不合法 ${this.type}`,
      MISMATCH: `${this.key} 类型不匹配`,
    };
    return msgMapping[type];
  }
}

function createError(type, options) {
  const err = new Err_Type(options);
  return new Error(err.getErrMessage(type));
}

function logResult(
  config = [],
  option,
) {
  const len = config.length;
  const result = {};
  for (let i = 0; i < len; i += 1) {
    const [
      key,
      type,
      required = true,
    ] = config[i];
    // 可选入参
    if (required === false) continue;
    if (!Reflect.has(option, key)) result[key] = [false, null, new Err_Type({ key }).getErrMessage('MISSING')];

    const optionKeyType = Object
      .prototype.toString.call(option[key])
      .match(/[a-zA-Z]+/g)[1]
      .toLocaleLowerCase();

    if (!TYPE_MAPPING.includes(type)) result[key] = [false, option[key], new Err_Type({ key, type }).getErrMessage('ILLEGAL')];
    if (type !== optionKeyType) result[key] = [false, option[key], new Err_Type({ key }).getErrMessage('MISMATCH')];
  }
  return result;
}

export default function entryCheck(
  config = [],
  option,
) {
  return new Promise((resolve) => {
    try {
      const len = config.length;
      const result = {};
      for (let i = 0; i < len; i += 1) {
        const [
          key,
          type,
          required = true,
        ] = config[i];
        // 可选入参
        if (required === false) continue;
        if (!Reflect.has(option, key)) throw createError('MISSING', { key });
        const optionKeyType = Object
          .prototype.toString.call(option[key])
          .match(/[a-zA-Z]+/g)[1]
          .toLocaleLowerCase();
        if (!TYPE_MAPPING.includes(type)) throw createError('ILLEGAL', { key, type });
        if (type !== optionKeyType) throw createError('MISMATCH', { key });
      }
      resolve([null, null]);
    } catch (error) {
      resolve([error, logResult(config, option)]);
    }
  });
};