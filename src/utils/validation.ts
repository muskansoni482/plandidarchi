export const isValid = (name: string) => {
  const matchString = /^[a-zA-Z ]+$/;
  return matchString.test(name);
};

export const deepCopy = (obj:any) => JSON.parse(JSON.stringify(obj));

export const passwordError = "Enter valid password";
export const passRegrex =
 /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?!.* ).{8,40}$/;
