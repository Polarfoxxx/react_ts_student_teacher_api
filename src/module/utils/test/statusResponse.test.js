import servicesStatusResponze from "../statusResponze.services"

test("statusServicesTested", () => {
    expect(servicesStatusResponze.statusResponze(200)).toBe("OK")
    expect(servicesStatusResponze.statusResponze(204)).toBe("Accepted")
    expect(servicesStatusResponze.statusResponze(403)).toBe("Forbidden")
    expect(servicesStatusResponze.statusResponze(404)).toBe("Not Found")
})