export const generateEndpoints = (baseUrl: string) => {
  return {
    blogs: `${baseUrl}blogs`,
    categories: `${baseUrl}categories`,
    users: `${baseUrl}users`,
    media: `${baseUrl}media`,
    // jobs: `${baseUrl}blogs`,
    // login: `${baseUrl}users/signIn`,
    // forgotPassword: `${baseUrl}users/forgotPassword`,
    // resetPassword: `${baseUrl}users/resetPassword`,
    // signup: `${baseUrl}users/signUp`,
    // contact: `${baseUrl}contacts`,
    like: `${baseUrl}likes/blog`,
    // dislike: `${baseUrl}likes`,
    comment: `${baseUrl}comments/blog`,
    syllabuses : `${baseUrl}syllabuses`,
  };
};