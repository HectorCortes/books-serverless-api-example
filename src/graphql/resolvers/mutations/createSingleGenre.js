export function request(ctx) {
  return {
    version: "2018-05-29",
    method: "POST",
    resourcePath: "/",
    params: {
      headers: {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": "AWSStepFunctions.StartSyncExecution",
      },
      body: {
        stateMachineArn: "arn:aws:states:${AWS::Region}:${AWS::AccountId}:stateMachine:CreateGenreStateMachine",
        input: '"input": "{ "name": $ctx.args.name}"',
      },
    },
  };
}
