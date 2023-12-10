enum ApplicationStatus {
    PENDING,
    SUBMITTED,
    DELIVERED,
    APPROVED,
    REJECTED,
}


export type ApplicationResponse = {
    linkCV: string,
    jobId: number
    jobTitle: string
    candidateName: string
    submittedAt: string
    coverLetter: string
    status: ApplicationStatus
    candidateId: number
}