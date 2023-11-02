/* This file was created by inlang.
It is needed in order to circumvent a current limitation of SvelteKit. See https://github.com/inlang/inlang/issues/647
You can remove this comment and modify the file as you like. We just need to make sure it exists.
Please do not delete it (inlang will recreate it if needed). */

import { VERCEL_GIT_COMMIT_MESSAGE } from '$env/static/private';

type DeploymentInfo = {
    commitMeesage: string;
};

export function load(): DeploymentInfo {
    return {
        commitMeesage: VERCEL_GIT_COMMIT_MESSAGE ?? 'local 호스트 입니다.',
    };
}
