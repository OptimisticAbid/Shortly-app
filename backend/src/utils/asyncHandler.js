const asyncHandler = (fn) => {
    return async(req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (err) {
            console.log('error catched: ', err)
            res.status(res.statusCode || 500).json({
                success : false,
                message : err.message
            })
        }
    }
}

export { asyncHandler }