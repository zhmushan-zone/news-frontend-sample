import { PersonalNewsModule } from './personal-news.module';

describe('PersonalNewsModule', () => {
  let personalNewsModule: PersonalNewsModule;

  beforeEach(() => {
    personalNewsModule = new PersonalNewsModule();
  });

  it('should create an instance', () => {
    expect(personalNewsModule).toBeTruthy();
  });
});
