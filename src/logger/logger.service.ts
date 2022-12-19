import { Logger } from "tslog";
import { ILogObj } from "tslog/dist/types/interfaces";


export class LoggerService {
    public logger: Logger<ILogObj>

    constructor() {
      this.logger = new Logger({
        
      })
    }

    log(...args: unknown[]): void {
		this.logger.info(...args);
	}

	error(...args: unknown[]): void {
		// отправка в sentry / rollbar
		this.logger.error(...args);
	}

	warn(...args: unknown[]): void {
		this.logger.warn(...args);
	}
}