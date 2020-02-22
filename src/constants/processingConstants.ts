const processingConstants: { [key: string]: any } = {
  ajax: {
    requestHeaders: {
      'Content-Type': 'application/json',
    },
    youtube: {
      videoPart: 'snippet',
      maxResultsNumber: 1,
      methodName: 'get',
      timeoutTime: 15000,
    },
  },
}

export default processingConstants
