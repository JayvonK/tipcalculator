import { SetStateAction } from "react";

export const switchOff = (func1: (value: SetStateAction<string>) => void, func2: (value: SetStateAction<string>) => void, func3: (value: SetStateAction<string>) => void, func4: (value: SetStateAction<string>) => void) => {
    func1(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    func2(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    func3(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
    func4(' bg-[#00494d] text-white hover:bg-[#9fe8df] hover:text-[#00494d] ');
}

export const switchFalse = (func1: (value: SetStateAction<boolean>) => void, func2: (value: SetStateAction<boolean>) => void, func3: (value: SetStateAction<boolean>) => void, func4: (value: SetStateAction<boolean>) => void,  func5: (value: SetStateAction<boolean>) => void) => {
    func1(false);
    func2(false);
    func3(false);
    func4(false);
    func5(false);
}