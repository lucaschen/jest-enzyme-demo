const signUp = async () => {
  // we don't have an endpoint for signing up, but you can imagine that this actually exists
  // NOTE: this is NOT a Jest mock; this is supposed to be the actual sign up handler
  await new Promise(resolve => setTimeout(resolve, 1000));
};

export default signUp;
