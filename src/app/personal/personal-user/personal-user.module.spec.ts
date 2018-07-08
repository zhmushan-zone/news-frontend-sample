import { PersonalUserModule } from './personal-user.module';

describe('PersonalUserModule', () => {
  let personalUserModule: PersonalUserModule;

  beforeEach(() => {
    personalUserModule = new PersonalUserModule();
  });

  it('should create an instance', () => {
    expect(personalUserModule).toBeTruthy();
  });
});
