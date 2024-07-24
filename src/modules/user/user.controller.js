import {
  getCurrentUserService,
} from "./user.service.js";

class UserController {
  async getCurrentUser(req, res) {
    try {
      const user = await getCurrentUserService(req.user.userId);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
export default new UserController();
