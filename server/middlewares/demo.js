

//check if demo user
exports.isDemo = async (req, res, next)=> {
    console.log(req.user.email);
    if (req.user.email === "rohitiist48@gmail.com" || req.user.email === "Rohit@123") {
        return res.status(401).json({
            success: false,
            message: "This is a Demo User",
        });
    }
    next();
}