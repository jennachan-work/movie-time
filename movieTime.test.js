test("nav-logo image should be present", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const navLogo = document.querySelector(".nav-logo img");
    expect(navLogo).toBeTruthy();
  });
});

test("home section should have a heading", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const homeHeading = document.querySelector(".home-text h1");
    expect(homeHeading).toBeTruthy();
  });
});

test("movies section should have a heading", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const moviesHeading = document.querySelector(".movies .heading");
    expect(moviesHeading).toBeTruthy();
  });
});

test("movies container should not be empty", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const moviesContainer = document.querySelector(".movies-container");
    expect(moviesContainer).not.toBeNull();
    if (moviesContainer) {
      expect(moviesContainer.innerHTML).not.toBe("");
    }
  });
});
