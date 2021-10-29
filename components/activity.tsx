import { useEffect, useMemo, useState } from "react";
import Discord from "../constants/discordpresence"

enum Operation {
    Event,
    Hello,
    Initialize,
    Heartbeat,
}
enum EventType {
    INIT_STATE = "INIT_STATE",
    PRESENCE_UPDATE = "PRESENCE_UPDATE",
}
export default function CurrentActivity() {

}