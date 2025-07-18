import { verify } from "jsonwebtoken";


// Checks token and sets req.user
export function protect(req, res, next) {
    const auth = req.headers.authorization;
    if(!auth || !auth.startsWith("Bearer ")) return res.status(401).json({ message: "No Token Given"});


    const token = auth.split(" ")[1];
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded; // {id, role}
        next();
    } catch (error) {
        return res.status(403).json({ message: "invalid token"});
    }
}

// Checks role
export function authorize(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) return res.status(403).json({ message: "Forbidden"});
        next();
    };
}