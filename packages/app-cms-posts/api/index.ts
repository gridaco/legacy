import Axios, { AxiosInstance } from "axios";

export class PostsClient {
  private _client: AxiosInstance;

  constructor(readonly publication: string) {
    this._client = Axios.create({
      baseURL: "https://posts.grida.cc",
    });
  }

  async get(id: string) {
    return await (
      await this._client.get(`${id}`)
    ).data;
  }

  async posts() {
    return await (
      await this._client.get("/")
    ).data;
  }

  async draft({
    title,
    visibility,
  }: {
    title?: string | undefined;
    visibility?: "public" | "private";
  }) {
    return await (
      await this._client.post("/drafts", {
        publication: this.publication,
        title: title ?? "",
        visibility,
      })
    ).data;
  }

  async drafts() {
    await (
      await this._client.get("/drafts")
    ).data;
  }

  async publish(id: string) {
    return await (
      await this._client.post(`/${id}/publish`)
    ).data;
  }

  async unlist(id: string) {
    await (
      await this._client.post(`/${id}/unlist`)
    ).data;
  }

  async schedule(id: string) {
    await (
      await this._client.post(`/${id}/schedule`)
    ).data;
  }

  async scheduled() {
    await (
      await this._client.get("/scheduled")
    ).data;
  }

  async updateBody(id: string, html: string) {
    await (
      await this._client.put(`/${id}/body`, {
        html,
      })
    ).data;
  }

  async updateBodyCustom(id: string) {
    await (
      await this._client.put("/")
    ).data;
  }

  async updateTitle(id: string, title: string) {
    await (
      await this._client.post(`/${id}/title`, {
        title,
      })
    ).data;
  }

  async updateSummary(
    id: string,
    { summary, title }: { summary: string; title?: string }
  ) {
    await (
      await this._client.post(`/${id}/summary`, {
        summary,
        title,
      })
    ).data;
  }

  async updateTags(id: string) {
    await (
      await this._client.put(`/${id}/tags`)
    ).data;
  }

  async updateVisibility(id: string, visibility: string) {
    await (
      await this._client.put(`/${id}/tags`, {
        visibility,
      })
    ).data;
  }
}