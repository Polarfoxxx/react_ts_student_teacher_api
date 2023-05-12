import servicesValidityCheckJWTsToken from "../validityCheckJWTsToken.services";
   
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiTWljaGFsRm94eCIsImV4cCI6MTY4Mzg5NzQ5MSwiaXNzIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NzI3MS8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MjcxLyJ9.h7cYVmMAA4wDP-58DV197_Yhb5DoMT0FPvDuSbgx1s8"
 
test(("tested JWT token decode"), () => {
    expect(servicesValidityCheckJWTsToken(JWT)).toBeFalsy()
})