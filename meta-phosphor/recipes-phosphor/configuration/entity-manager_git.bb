SUMMARY = "Entity Manager"
DESCRIPTION = "Entity Manager provides d-bus configuration data \
and configures system sensors"

SRC_URI = "git://github.com/openbmc/entity-manager.git"
#SRCREV = "e18edb5badc2e16181cfc464a6ccd0ef51dc4548"
SRCREV = "e45333a83822e8ccb8e3dbc1e547fbe45b8cf959"
PV = "0.1+git${SRCPV}"

LICENSE = "Apache-2.0"
LIC_FILES_CHKSUM = "file://LICENCE;md5=a6a4edad4aed50f39a66d098d74b265b"

SYSTEMD_SERVICE_${PN} = "xyz.openbmc_project.EntityManager.service \
                         ${@bb.utils.contains('DISTRO_FEATURES', 'ipmi-fru', 'xyz.openbmc_project.FruDevice.service', '', d)}"

DEPENDS = "boost \
           nlohmann-json \
           sdbusplus \
           valijson"

S = "${WORKDIR}/git/"
inherit meson systemd

EXTRA_OEMESON = "-Dtests=disabled"

PACKAGECONFIG ??= "${@bb.utils.filter('DISTRO_FEATURES', 'ipmi-fru', d)}"
PACKAGECONFIG[ipmi-fru] = "-Dfru-device=true, -Dfru-device=false, i2c-tools,"

require conf/machine/include/unpack.inc

