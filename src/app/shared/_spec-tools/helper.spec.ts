
let consoleDebug: any;
let consoleError: any;
let consoleLog: any;

beforeAll(() => {
  consoleDebug = spyOn(console, 'debug');
  consoleDebug.and.stub();

  consoleError = spyOn(console, 'error');
  consoleError.and.stub();

  consoleLog = spyOn(console, 'log');
  consoleLog.and.stub();
});

afterEach(() => {
  consoleDebug.calls.reset();
  consoleError.calls.reset();
  consoleLog.calls.reset();
});