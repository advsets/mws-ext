export abstract class Mws {
  private readonly key: string;
  private readonly secret: string;

  abstract InitMws(...args: string[]);

  public ExecRequest() {
  }

  public ExecResponse() {
  }

  protected constructor(key, secret) {
    this.key = key;
    this.secret = secret;
    this.InitMws.call(this, arguments);
  }
}

export class Area {

}

export class Test extends Mws {
  constructor(key, secret) {
    super(key, secret);
  }

  InitMws(...args: string[]) {
    console.log(args);
  }
}

const mws = new Test('1', '2');
mws.InitMws('hello', 'hello');
