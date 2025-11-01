
export class Result<T> {
    
    public readonly status: number;
    public readonly success: boolean;
    public readonly message: string;
    private readonly data?: T;

    constructor(init: {
        status: number,
        success: boolean,
        message: string,
        data?: T  
    }) {
        this.status = init.status ?? 0;
        this.success = init.success ?? false;
        this.message = init.message ?? '';
        this.data = init.data;
    }

    static success<T>(
        data: T,
        message = "Success",
        status = 200
    ): Result<T> {
        return new Result<T>({
            status,
            success: true,
            message,
            data,
        });
    }

    static failure<T>(
        message: string,
        status = 500,
    ): Result<T> {
        return new Result<T>({
            status,
            success: false,
            message,
        });
    }

    handle<R>(
        onSuccess: (data: T) => R, 
        onFailure: (message: string, status: number) => R
    ): R {
        if (this.success) {
            return onSuccess(this.data!);
        } else {
            return onFailure(this.message, this.status);
        }
    }
}
