/**
 *  Класс настроек
 *  создает настройки по умолчанию
 *  содержит допустимые значения настроек
 */

class Settings {
  constructor() {
    this.defaultSetting = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.personalSetting = new Map();
    this.availableSettings = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  /**
 *  Метод изменения настроек
 *  @param {String} name название изменяемой настройки
 *  @param {String} value новое значение изменяемой настройки
 *
 *  @throws генерится ошибка при несоответствии имени настройки существующим
 *  @throws генерится ошибка при попытке задать недостпное значение для настройки
 */

  changeSettings(name, value) {
    if (!this.availableSettings[name]) throw new Error('Данная настройка недоступна');
    if (!this.availableSettings[name].includes(value)) {
      throw new Error(`Для настройки ${name} доступны опции: ${this.availableSettings[name].join(', ')}`);
    }
    if (this.personalSetting.has(name)) {
      this.personalSetting.delete(name);
    }
    this.personalSetting.set(name, value);

    return this.settings;
  }

  /**
 *  Геттер получения текущих настроек
 *  возвращает объединенные пользовательские и дефолтные настройки
 *
 */
  get settings() {
    const settings = new Map();
    [...this.defaultSetting.keys()].forEach((item) => {
      if (this.personalSetting.has(item)) {
        settings.set(item, this.personalSetting.get(item));
      } else {
        settings.set(item, this.defaultSetting.get(item));
      }
    });

    return settings;
  }
}

export default Settings;
