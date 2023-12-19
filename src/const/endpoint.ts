
export const PREFIX = "/api"
/**
 * * Authenticate
 */
export const AUTH_SERVICE = "/auth"
export const REGISTER = "/register"
export const SIGN_IN = "/sign-in"
export const REFRESH_TOKEN = "/refresh-token"
export const VERIFY_ACCOUNT = "/verify-account"
export const REGENERATE_OTP = "/regenerate-otp"


/**
 * * User
 */
export const USERS_SERVICE = "/users"
export const FORGOT_PASSWORD = `${PREFIX}${USERS_SERVICE}/forgot-password`
export const CHANGE_PASSWORD = `${PREFIX}${USERS_SERVICE}/change-password`
export const RESET_PASSWORD = `${PREFIX}${USERS_SERVICE}/reset-password`
export const SAVE_JOB = `${PREFIX}${USERS_SERVICE}/saveJob`
export const SAVE_JOBS = `${PREFIX}${USERS_SERVICE}/saveJobs`
export const SAVED_JOBS = `${PREFIX}${USERS_SERVICE}/savedJobs`
export const APPLIED_JOBS= `${PREFIX}${USERS_SERVICE}/appliedJobs`
export const APPLY_JOB = `/applyJob`
export const WRITE_COVERLETTER = `${PREFIX}${USERS_SERVICE}/writeCoverLetter`
export const UPLOAD_CV = `${PREFIX}${USERS_SERVICE}/uploadUserCv`
export const GET_CV = `${PREFIX}${USERS_SERVICE}/userCv`




/**
 * * Job
 */

export const JOB_SERVICE = "/job"
export const MARK_AS_VIEWED = "/viewJob"
export const VIEWED_JOBS = "/viewAtJob"
export const SEARCH_BY_KEY = "/searchByKeyword"
export const SEARCH_BY_SKILL = "/searchBySkill"


/**
 * * Company
 */
export const COMPANY_SERVICE = "/company"


/**
 * * Candidate profile
 */
const PROFILE = "/profile"
export const UPDATE_PROFILE = `${PREFIX}${PROFILE}/updateProfile`
export const GET_PROFILE = `${PREFIX}${PROFILE}/getProfile`
export const UPLOAD_AVATAR = `${PREFIX}${PROFILE}/uploadAvatar`
export const ADD_EDUCATION = `${PREFIX}${PROFILE}/add-education`
export const ADD_EXPERIENCE = `${PREFIX}${PROFILE}/add-experience`
export const DELETE_AVATAR = `${PREFIX}${PROFILE}/deleteAvatar`
export const DELETE_EDUCATION = `${PREFIX}${PROFILE}/educations`
export const DELETE_EXPERIENCE = `${PREFIX}${PROFILE}/experience`
export const DOWNLOAD_CV = `${PREFIX}${PROFILE}/downloadCv`
export const WRITE_ABOUT_ME = `${PREFIX}${PROFILE}/write-about-me`
export const ADD_SKILL =  `${PREFIX}${PROFILE}/add-skill`
export const GET_ALL_SKILL = `${PREFIX}${PROFILE}/get-all-skill`

/**
 * * Recruiter
 */
const RECRUITER = "/recruiter"
export const LOG_IN = `${PREFIX}${RECRUITER}/login`
export const REGISTER_RECRUITER = `${PREFIX}${RECRUITER}/register`
export const LIST_ALL_JOB= `${PREFIX}${RECRUITER}/list-all-job`
export const GET_JOB_BY_ID = `${PREFIX}${RECRUITER}/getJob`
export const UPDATE_JOB = `${PREFIX}${RECRUITER}/update-job`
export const POST_JOB = `${PREFIX}${RECRUITER}/post-job`
export const DELETE_JOB = `${PREFIX}${RECRUITER}/delete-job`
export const GET_ALL_APPLICATION = `${PREFIX}${RECRUITER}/get-application-form`
export const GET_APPLICATION = `${PREFIX}${RECRUITER}/getApplicationById`
export const UPDATE_APPLICATION = `${PREFIX}${RECRUITER}/updateApplication`
export const FORGOT_PASSWORD_RECRUITER = `${PREFIX}${RECRUITER}/forgot-password`
export const RESET_PASSWORD_RECRUITER = `${PREFIX}${RECRUITER}/reset-password`
export const GET_COMPANY = `${PREFIX}${RECRUITER}/get-company`
export const UPDATE_COMPANY = `${PREFIX}${RECRUITER}/update-company`


