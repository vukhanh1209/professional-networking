export type ApplicationStatus = 'DELIVERED' | 'APPROVED' |  'REJECTED'

export type AppicationType = "DELIVERED" | "APPROVED";


export type ApplicationResponse = {
    id: number,
    linkCV: string,
    jobId: number
    jobTitle: string
    candidateName: string
    submittedAt: string
    coverLetter: string
    status: AppicationType
    candidateId: number
    phoneNumber: string
    email: string
    birthdate: string
    address : string
}