import { getFileContents, getOptions } from './index';

describe('getFileContents', () => {
  const filePath = './storage/test.csv';

  it('returns file contents', () => {
    const fileContents = getFileContents(filePath);
    expect(fileContents).toBe(
      `name,address,phone\nbill,123 Main St,555-123-0101\ndave,456 Cherry Ln,555-333-9999`
    );
  });
});

describe('getOptions', () => {
  const testPath = '/test/path';
  beforeEach(() => {
    jest.replaceProperty(process, 'argv', [
      ...process.argv,
      '--help',
      `--path=${testPath}`,
    ]);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('returns options', () => {
    const options = getOptions();
    expect(options).toBeDefined();
    expect(options.help).toBe(true);
    expect(options.path).toBe(testPath);
  });
});
