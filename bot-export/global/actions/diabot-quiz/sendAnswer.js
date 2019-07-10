const axios = require('axios')

/**
 * @title Call the Github API to fetch Botpress repositories
 * @category Turorial
 * @author Botpress, Inc.
 */
const sendAnswer = async (args, ev, user, session, temp) => {
  // We call the Github API
  const { data } = await axios.put('http://localhost:1914/apiv1/quiz/question', {
    answer: args,
    debug: {
      args,
      ev,
      user,
      session,
      temp
    }
  });

  // We assign the response to the session variable so we can use it later
  session.response = data
}

// Actions are async, so make sure to return a promise
return sendAnswer(args, event, user, session, temp);

// Refs: https://botpress.io/docs/main/memory/