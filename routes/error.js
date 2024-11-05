import {router} from "express/lib/application";

router.get((req, res, next) => {
    res.status(404).render('error', {message: 'Сторінку не знайдено'});
});

module.exports = router