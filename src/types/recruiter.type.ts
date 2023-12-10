enum ApplicationStatus {
    PENDING,
    SUBMITTED,
    DELIVERED,
    APPROVED,
    REJECTED,
}


export type ApplicationResponse = {
    id: number,
    linkCV: string,
    jobId: number
    jobTitle: string
    candidateName: string
    submittedAt: string
    coverLetter: string
    status: ApplicationStatus
    candidateId: number
    phoneNumber: string
    email: string
    birthdate: string
    address : string
}