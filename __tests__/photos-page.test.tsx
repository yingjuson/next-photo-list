import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PhotosPage from "../app/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Page", () => {
  const queryClient = new QueryClient();

  it("renders a search input element", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PhotosPage />
      </QueryClientProvider>
    );

    const searchInputElem = screen.getByTestId("search-input");

    expect(searchInputElem).toBeInTheDocument();
  });

  it("renders a photo list container", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <PhotosPage />
      </QueryClientProvider>
    );

    const photoListElem = screen.getByTestId("photolist-container");

    expect(photoListElem).toBeInTheDocument();
  });
});
