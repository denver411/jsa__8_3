import Settings from '../src/js/Settings';

test('Создается экземпляр класса Settings', () => {
  const settings = new Settings();

  expect(settings instanceof Settings).toBeTruthy();
});

test('Свойство settings возвращает текущие настройки', () => {
  const settings = new Settings();

  expect(settings.settings.has('theme')).toBeTruthy();
  expect(settings.settings.has('music')).toBeTruthy();
  expect(settings.settings.has('difficulty')).toBeTruthy();
});

test('Значения настроек изменяются пользователем', () => {
  const settings = new Settings();

  settings.changeSettings('difficulty', 'hard');

  expect(settings.settings.get('difficulty')).toBe('hard');
});

test('Назначенные пользователем значения настроек изменяются', () => {
  const settings = new Settings();

  settings.changeSettings('difficulty', 'hard');
  settings.changeSettings('difficulty', 'nightmare');

  expect(settings.settings.get('difficulty')).toBe('nightmare');
});

test('Попытка изменить несуществующую настройку приведет к ошибке', () => {
  const settings = new Settings();

  try {
    settings.changeSettings('rules', 'normal');
  } catch (e) {
    expect(e).toEqual(Error('Данная настройка недоступна'));
  }
});

test('Попытка выбрать недоступное значение настройки приведет к ошибке', () => {
  const settings = new Settings();
  const name = 'theme';

  try {
    settings.changeSettings(name, 'ololo');
  } catch (e) {
    expect(e).toEqual(Error(`Для настройки ${name} доступны опции: ${settings.availableSettings[name].join(', ')}`));
  }
});
