/*.legs:nth-child(5) {
    transform: rotate(0deg);
    animation: walkLeftTop 1s linear infinite;
}
.legs:nth-child(6) {
    transform: rotate(0deg);
    animation: walkRightTop 1s linear infinite;
}
#left-leg:before {
    transform: rotate(0deg);
    animation: walkLeftBottom 1s linear infinite;
}
#right-leg:before {
    transform: rotate(0deg);
    animation: walkRightBottom 1s linear infinite;
}
@keyframes walkLeftTop {
    0%{transform: rotate(25deg)}
    25%{transform: rotate(27deg)}
    50%{transform: rotate(-19deg)}
    100%{transform: rotate(-33deg)}
}
@keyframes walkRightTop {
    0%{transform: rotate(-25deg)}
    25%{transform: rotate(-19deg)}
    50%{transform: rotate(3deg)}
    100%{transform: rotate(13deg)}
}
@keyframes walkLeftBottom {
    0%{transform: rotate(11deg)}
    25%{transform: rotate(23deg)}
    50%{transform: rotate(92deg)}
    100%{transform: rotate(53deg)}
}
@keyframes walkRightBottom {
    0%{transform: rotate(0deg)}
    25%{transform: rotate(15deg)}
    50%{transform: rotate(0deg)}
    100%{transform: rotate(6deg)}
}*/